import { removeObject3D } from "./removeObject3D";
import { findObjectByName } from "./findObjectbyName";

export function removeTrack() {
  if (findObjectByName(window.scene, "track"))
    removeObject3D(findObjectByName(window.scene, "track"));
}
