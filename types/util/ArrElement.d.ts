// courtesy of: https://bobbyhadz.com/blog/typescript-array-element-type
type ArrElement<ArrType> = ArrType extends readonly (infer ElementType)[]
  ? ElementType
  : never;