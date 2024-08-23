/* eslint-disable no-param-reassign */
type AnyObject = {
  [key: string]: string | string[];
};

function removeEmptyFields(obj: AnyObject): AnyObject {
  Object.keys(obj).forEach((key: string) => {
    if (
      obj[key] === null
      || obj[key] === undefined
      || obj[key] === ''
      || (Array.isArray(obj[key]) && obj[key].length === 0)
    ) {
      delete obj[key];
    }
  });
  return obj;
}

export default removeEmptyFields;
