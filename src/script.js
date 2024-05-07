function buildSceneViewerUrl() {
  var androidFile = `https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/GlamVelvetSofa/glTF/GlamVelvetSofa.gltf`;
  var package = `com.google.android.googlequicksearchbox`;
  var scheme = `https`;
  var action = `android.intent.action.VIEW`;
  var fallBackUrl = `wrong.html`;
  var sceneViewer = `intent://arvr.google.com/scene-viewer/1.0`;

  return `${sceneViewer}?file=${androidFile}#Intent;scheme=${scheme};action=${action};package=${package};S.browser_fallback_url=${fallBackUrl};end;`;
}

function getDevice() {
  const devices = {
    iphone: { url: "3d/iphone/mac-pro.usdz", text: "Open AR on iPhone" },
    android: { url: buildSceneViewerUrl(), text: "Open AR on Android" },
    fallback: {
      url: "#",
      text: "Use an Android or iPhone device to open the AR",
    },
  };

  if (/Android/i.test(navigator.userAgent)) {
    return devices["android"];
  }

  if (/iPhone/i.test(navigator.userAgent)) {
    return devices["iphone"];
  }

  return devices["fallback"];
}

function updateARLink() {
  var arLink = document.getElementById("arLink");
  var device = getDevice();

  arLink.href = device.url;
  arLink.textContent = device.text;
}

window.onload = updateARLink;
