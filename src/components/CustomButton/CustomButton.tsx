import { Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const CustomButton = ({ text, to }: { text: string; to: string }) => {
  return (
    <Link
      as={RouterLink}
      display="inline-block"
      m="10px"
      background="white"
      p="10px"
      borderRadius="4px"
      border="4px solid #555"
      textTransform="uppercase"
      color="rgb(14, 45, 73)"
      fontWeight="bold"
      cursor="pointer"
      to={to}
      _hover={{ textDecoration: "none", background: "#ccc" }}
    >
      {text}
    </Link>
  );
};

export default CustomButton;
