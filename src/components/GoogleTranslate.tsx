import { useEffect } from "react";
declare global {
  interface Window {
    google: any;
    googleTranslateElementInit: () => void;
  }
}

const GoogleTranslate = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit`;
    script.async = true;
    document.body.appendChild(script);

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "am,en,om,ti",
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        "google_translate_element"
      );
    };
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      id="google_translate_element"
      className="[&_.VIpgJd-ZVi9od-l4eHX-hSRGPd]:hidden [&_.goog-te-gadget_span]:hidden "
    ></div>
  );
};
export default GoogleTranslate;
