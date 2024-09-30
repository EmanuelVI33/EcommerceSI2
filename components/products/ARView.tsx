"use client"

function ARViewer() {
  return (
    <a-scene arjs>
      <a-marker preset="hiro">
        <a-entity position="0 0 0" scale="0.1 0.1 0.1">
          <a-sphere color="blue" radius="5"></a-sphere>
        </a-entity>
      </a-marker>
      <a-entity camera position="0 0 0"></a-entity>
    </a-scene>
  );
}

export default ARViewer;
