type attr1 = "policies:test all policies";
type attr2 = string;

type AttrStr<
  Key extends string = string,
  Val extends string = string,
> = `${Key}:${Val}`;

type GetAttrStr<T extends string> = T extends `${infer Key}:${infer Val}`
  ? AttrStr<Key, Val>
  : T extends string
  ? AttrStr
  : never;
type attr1a = GetAttrStr<attr1>;
type attr2a = GetAttrStr<attr2>;

type attrs1 = "policies:test all policies,who:me";
type GetAttrsStr<T extends string> =
  T extends `${infer Key}:${infer Val},${infer Rest}`
    ? `${AttrStr<Key, Val>},${GetAttrsStr<Rest>}`
    : T extends string
    ? AttrStr
    : never;
type attrs1a = GetAttrsStr<attrs1>;

type AttrsStr = `${AttrStr | ""}${`,${AttrStr}` | ""}`;

type OneOrMoreAs = `a${OneOrMoreAs | ""}`;
const example1: OneOrMoreAs = "a"; // Valid
const example2: OneOrMoreAs = "aa"; // Valid
const example3: OneOrMoreAs = "aaa"; // Valid

// https://stackoverflow.com/a/74301790
type TrimLeft<S extends string, C extends string> = string extends S
  ? S
  : S extends `${C}${infer A extends string}`
  ? TrimLeft<A, C>
  : S;
type ConsistsOf<S extends string, C extends string> = TrimLeft<S, C> extends ""
  ? true
  : false;

type test1 = ConsistsOf<"aaaab", "a">;

// const useNameSpace = (offset = 0) => {
//     const testItemIdsArray: any[] = useSelector(testItemIdsArraySelector);
//     return getQueryNamespace(testItemIdsArray.length - 1 - offset);
//
// }
