import { useEffect, useRef, useState } from "react";

const useGoogleMapsScript = (callback) => {
  const isMounted = useRef(true);
  const [isScriptLoaded, setIsScriptLoaded] = useState(false); // 스크립트 로드 상태 추가

  useEffect(() => {
    const loadGoogleMapsScript = () => {
      if (typeof window !== "undefined" && !window.google) {
        ((g) => {
          var h,
            a,
            k,
            p = "The Google Maps JavaScript API",
            c = "google",
            l = "importLibrary",
            q = "__ib__",
            m = document,
            b = window;
          b = b[c] || (b[c] = {});
          var d = b.maps || (b.maps = {}),
            r = new Set(),
            e = new URLSearchParams(),
            u = () =>
              h ||
              (h = new Promise(async (f, n) => {
                await (a = m.createElement("script"));
                e.set("libraries", [...r] + "");
                for (k in g)
                  e.set(
                    k.replace(/[A-Z]/g, (t) => "_" + t[0].toLowerCase()),
                    g[k]
                  );
                e.set("callback", c + ".maps." + q);
                a.src = `https://maps.${c}apis.com/maps/api/js?` + e;
                d[q] = f;
                a.onerror = () => (h = n(Error(p + " could not load.")));
                a.nonce = m.querySelector("script[nonce]")?.nonce || "";
                m.head.append(a);
              }));
          d[l]
            ? console.warn(p + " only loads once. Ignoring:", g)
            : (d[l] = (f, ...n) => r.add(f) && u().then(() => d[l](f, ...n)));
        })({
          key: "AIzaSyC0Xh1i9FVuHDehtCgiHnr9TuaKxEJYB9M",
          v: "weekly",
          map_ids: "e5dafb91d67d6c4d",
        });

        window.google.maps.__ib__ = () => {
          setIsScriptLoaded(true); // 스크립트가 로드되었음을 설정
          callback();
        };
      } else {
        setIsScriptLoaded(true);
        callback();
      }
    };

    loadGoogleMapsScript();

    return () => {
      isMounted.current = false;
    };
  }, [callback]);

  return isMounted;
};

export default useGoogleMapsScript;
