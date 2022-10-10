import DOMPurify from "dompurify";

/*
Sanitize markup or text when used inside dangerouslySetInnerHTML

@param {string} content plain or html string

@return {string} sanitized string
*/
export const sanitize = (content) => {
  return process.browser ? DOMPurify.sanitize(content) : content;
};
