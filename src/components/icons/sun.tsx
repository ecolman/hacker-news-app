interface Props {
  color?: string;
}

export const SunIcon: React.FC<Props> = ({ color = 'white' }) => {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="10" cy="10" r="5" fill={color} />
      <line x1="9.75" y1="0.75" x2="9.75" y2="2.58333" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="9.75" y1="17.4167" x2="9.75" y2="19.25" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="17.071" y1="3.98962" x2="15.7747" y2="5.28598" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <line
        x1="5.28613"
        y1="15.7747"
        x2="3.98977"
        y2="17.0711"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line x1="19.25" y1="10.75" x2="17.4167" y2="10.75" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="2.58325" y1="10.75" x2="0.749919" y2="10.75" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="16.0104" y1="17.071" x2="14.714" y2="15.7747" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <line
        x1="4.22547"
        y1="5.28595"
        x2="2.92911"
        y2="3.98959"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};
