

interface IconProps {
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  size?: number;
  color?: string;
  onClick?: () => void;
}

const Icon = ({ icon, size = 24, color = '#000', onClick }: IconProps): JSX.Element => {
  return (
    <i
      style={{ fontSize: `${size}px`, color }}
      onClick={onClick}
    />
  );
};

export default Icon;
