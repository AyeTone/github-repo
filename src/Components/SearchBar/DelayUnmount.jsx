import { useState, useEffect } from "react";

export function useDelayRepoUnmount(repoSearch, delayTime) {
  const [showDiv, setShowDiv] = useState(false);
  useEffect(() => {
    let timeoutId;
    if (repoSearch && !showDiv) {
      setShowDiv(true);
    } else if (!repoSearch && showDiv) {
      timeoutId = setTimeout(() => setShowDiv(false), delayTime);
    }
    return () => clearTimeout(timeoutId);
  }, [repoSearch, delayTime, showDiv]);
  return showDiv;
}

export function useDelayUserUnmount(userSearch, delayTime) {
  const [showSearch, setShowSearch] = useState(false);
  useEffect(() => {
    let timeoutId;
    if (userSearch && !showSearch) {
      setShowSearch(true);
    } else if (!userSearch && showSearch) {
      timeoutId = setTimeout(() => setShowSearch(false), delayTime);
    }
    return () => clearTimeout(timeoutId);
  }, [userSearch, delayTime, showSearch]);
  return showSearch;
}
