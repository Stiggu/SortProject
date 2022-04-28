type JSONValue = string | number[] | JSONObject;

export default interface JSONObject {
    [x:string]: JSONValue;
}