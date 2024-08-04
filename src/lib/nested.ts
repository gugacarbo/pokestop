export type NestedKeyOf<ObjectType> = {
  [Key in keyof ObjectType & (string | number)]: ObjectType[Key] extends object
    ? `${Key}` | `${Key}.${NestedKeyOf<ObjectType[Key]>}`
    : `${Key}`;
}[keyof ObjectType & (string | number)];

export type NestedKeyOfType<Type> = Type extends object
  ? {
      [Key in keyof Type & (string | number)]: Type[Key] extends object
        ? `${Key}` | `${Key}.${NestedKeyOfType<Type[Key]>}`
        : `${Key}`;
    }[keyof Type & (string | number)]
  : never;

export type NestedObject<T> = {
  [K in keyof T]: T[K] extends object ? NestedObject<T[K]> : T[K];
};

export type LastNestedKeysOfType<T> = keyof T;

export function accessNestedKey<
  L,
  T extends Record<keyof L | string | number, object | string | number>,
  K extends NestedKeyOfType<T>
>(object: T, filterKey: K) {
  const keys = String(filterKey).split(".");
  return keys.reduce((acc: NestedObject<T>, key: string) => {
    if (acc[key] === undefined) {
      throw new Error(`Key ${key} not found in object`);
    }
    return acc[key] as NestedObject<T>; // Explicitly cast the return type
  }, object as NestedObject<T>);
}
