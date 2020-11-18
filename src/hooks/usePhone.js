import { useMemo } from "react";
import parsePhoneNumber from "libphonenumber-js";

const usePhone = (phoneNumber) => {
  const parsedPhone = useMemo(() => {
    if (!phoneNumber || typeof phoneNumber !== "string") return {};

    const parsed = parsePhoneNumber(phoneNumber);

    return parsed
      ? {
          number: parsed.number,
          link: parsed.getURI(),
          formatted: parsed.formatInternational(),
        }
      : {};
  }, [phoneNumber]);

  return parsedPhone;
};

export default usePhone;
