export const findObjectByName = (object, name) => {
  let foundObject = undefined;

  // Traverse the ancestors of the object
  object.traverseAncestors((ancestor) => {
    if (ancestor.name === name) {
      foundObject = ancestor;
    }
  });

  // If not found among ancestors, traverse the descendants of the object
  if (foundObject === undefined) {
    object.traverse((obj) => {
      if (obj.name === name) {
        foundObject = obj;
      }
    });
  }

  return foundObject;
};
