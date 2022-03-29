import { useState, useEffect } from "react";

/* delay repo searchbar unmount */
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

/* delay user searchbar unmount */
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

/* Delay User Reload */
export function useDelayUserReload(e, delayTime) {
  const [showDiv, setShowDiv] = useState(false);
  useEffect(() => {
    let timeoutId;
    if (e && !showDiv) {
      setShowDiv(true);
    } else if (!e && showDiv) {
      timeoutId = setTimeout(() => setShowDiv(false), delayTime);
    }
    return () => clearTimeout(timeoutId);
  }, [e, delayTime, showDiv]);
  return showDiv;
}
