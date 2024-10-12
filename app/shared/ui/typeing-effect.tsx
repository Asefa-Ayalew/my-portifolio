// TypingEffect.jsx
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { Text } from "@mantine/core";
interface TypingEffectProps {
  strings: string[];
  typeSpeed?: number;
  backSpeed?: number;
  loop?: boolean;
}

const TypingEffect: React.FC<TypingEffectProps> = ({
  strings,
  typeSpeed = 40,
  backSpeed = 50,
  loop = true,
}) => {
  const el = useRef(null);

  useEffect(() => {
    const options = {
      strings: strings || [],
      typeSpeed,
      backSpeed,
      loop,
    };

    // Instantiate Typed.js
    const typed = new Typed(el.current, options);

    // Clean up on unmount
    return () => {
      typed.destroy();
    };
  }, [strings, typeSpeed, backSpeed, loop]);

  return (
    <Text variant="link" component="span" inherit className="text-green-600">
      <span ref={el} />
    </Text>
  );
};

export default TypingEffect;
