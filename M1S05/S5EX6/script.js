document.body.setAttribute('style', 'margin: 0; padding: 0');
// Div para o map //
const div = document.createElement('div');
div.id = 'map';
div.setAttribute('style', 'position: absolute; top: 0; bottom: 0; width: 100%');
document.querySelector('body').appendChild(div);

// Buscar dados da API mapbox //
const requestURL = 'https://api.mapbox.com/v4/ro3son/access_token=pk.eyJ1Ijoicm8zc29uIiwiYSI6ImNsMWwzOWptejA2dTkzZGw2NWtmank2cTUifQ.f8VWFAPCv-_BzmPDJ6_-Tg';

fetch(requestURL)
    .then((response) => {
        console.log(response.json());
    })
    .then((dados) => {
        mapboxgl.accessToken = 'pk.eyJ1Ijoicm8zc29uIiwiYSI6ImNsMWwzOWptejA2dTkzZGw2NWtmank2cTUifQ.f8VWFAPCv-_BzmPDJ6_-Tg';

        const map = new mapboxgl.Map({
            container: 'map', // container ID
            style: 'mapbox://styles/mapbox/dark-v10', // style URL
            antialias: true,
            center: [-70.939, 25.777], // starting position [lng, lat]
            zoom: 5.85 // starting zoom
        });
        //Create a default Maker//
        const marker = new mapboxgl.Marker({ color: 'black' })
            .setLngLat([-70.939, 25.777])
            .setPopup(new mapboxgl.Popup().setHTML('<h1>Você está no centro do Triângulo das Bermudas.</h1>'))
            .addTo(map);

        // Add a custom style layer //
        // create a custom style layer to implement the WebGL content
        const highlightLayer = {
            id: 'highlight',
            type: 'custom',

            // method called when the layer is added to the map
            // https://docs.mapbox.com/mapbox-gl-js/api/#styleimageinterface#onadd
            onAdd: function (map, gl) {
                // create GLSL source for vertex shader
                const vertexSource = `
    uniform mat4 u_matrix;
    attribute vec2 a_pos;
    void main() {
    gl_Position = u_matrix * vec4(a_pos, 0.0, 1.0);
    }`;

                // create GLSL source for fragment shader
                const fragmentSource = `
    void main() {
    gl_FragColor = vec4(1.0, 0.0, 0.0, 0.5);
    }`;

                // create a vertex shader
                const vertexShader = gl.createShader(gl.VERTEX_SHADER);
                gl.shaderSource(vertexShader, vertexSource);
                gl.compileShader(vertexShader);

                // create a fragment shader
                const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
                gl.shaderSource(fragmentShader, fragmentSource);
                gl.compileShader(fragmentShader);

                // link the two shaders into a WebGL program
                this.program = gl.createProgram();
                gl.attachShader(this.program, vertexShader);
                gl.attachShader(this.program, fragmentShader);
                gl.linkProgram(this.program);

                this.aPos = gl.getAttribLocation(this.program, 'a_pos');

                // define vertices of the triangle to be rendered in the custom style layer
                const miami = mapboxgl.MercatorCoordinate.fromLngLat({
                    lng: -80.083,
                    lat: 25.776
                });
                const puertoRico = mapboxgl.MercatorCoordinate.fromLngLat({
                    lng: -66.589,
                    lat: 18.199
                });
                const bermuda = mapboxgl.MercatorCoordinate.fromLngLat({
                    lng: -64.767,
                    lat: 32.320
                });

                // create and initialize a WebGLBuffer to store vertex and color data
                this.buffer = gl.createBuffer();
                gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
                gl.bufferData(
                    gl.ARRAY_BUFFER,
                    new Float32Array([
                        miami.x,
                        miami.y,
                        puertoRico.x,
                        puertoRico.y,
                        bermuda.x,
                        bermuda.y
                    ]),
                    gl.STATIC_DRAW
                );
            },

            // method fired on each animation frame
            // https://docs.mapbox.com/mapbox-gl-js/api/#map.event:render
            render: function (gl, matrix) {
                gl.useProgram(this.program);
                gl.uniformMatrix4fv(
                    gl.getUniformLocation(this.program, 'u_matrix'),
                    false,
                    matrix
                );
                gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
                gl.enableVertexAttribArray(this.aPos);
                gl.vertexAttribPointer(this.aPos, 2, gl.FLOAT, false, 0, 0);
                gl.enable(gl.BLEND);
                gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
                gl.drawArrays(gl.TRIANGLE_STRIP, 0, 3);
            }
        };

        // add the custom style layer to the map
        map.on('load', () => {
            map.addLayer(highlightLayer, 'building');
        });
    });
