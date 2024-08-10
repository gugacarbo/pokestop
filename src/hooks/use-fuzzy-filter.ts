import Fuse, { FuseResult, IFuseOptions } from "fuse.js";
import { useEffect } from "react";
import { useDebounceValue } from "usehooks-ts";

const fuseOptions = {
  // isCaseSensitive: false,
  // includeScore: false,
  // shouldSort: true,
  // includeMatches: false,
  // findAllMatches: false,
  // minMatchCharLength: 1,
  // location: 0,
  // threshold: 0.6,
  // distance: 100,
  // useExtendedSearch: false,
  // ignoreLocation: false,
  // ignoreFieldNorm: false,
  // fieldNormWeight: 1,
  keys: ["name", "id"],
};

function useFuzzyFilter<T>(
  list: T[],
  searchPattern: string,
  { delay = 500, ...options }: IFuseOptions<T> & { delay?: number }
): FuseResult<T>[] {
  const [input, setInput] = useDebounceValue(searchPattern, delay);

  useEffect(() => {
    const timer = setTimeout(() => {
      setInput(searchPattern);
    }, delay);
    return () => clearTimeout(timer);
  }, [searchPattern]);

  
  const fuse = new Fuse(list, { ...fuseOptions, ...options });
  return fuse.search(input);

}

export { useFuzzyFilter };
