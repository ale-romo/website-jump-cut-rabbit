
export const formatStringWithLineBreaks = (text: string) => {
  return text.split('\n').map((str, index) => (
    <div key={index} className="mb-3 last:mb-0">
      {str}
    </div>
  ));
};
