function BackgroundImage({
  image,
  width,
  height,
  heightPercent,
  borderRadius,
  borderRadiusPercent,
  className,
  children,
  padtb,
}) {
  const w = width ? width : 100;
  const h = height ? height : heightPercent;
  const radius = borderRadius ? borderRadius : borderRadiusPercent;
  const heightUnit = height ? 'px' : '%';
  const radiusUnit = borderRadius ? 'px' : '%';
  const widthUnit = width ? 'px' : '%';
  const style = {
    backgroundImage: `url(${image})`,
    width: `${w}${widthUnit}`,
    height: `${h}${heightUnit}`,
    borderRadius: `${radius}${radiusUnit}`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    padding: `${padtb}px 0`,
  };
  return (
    <section style={style} className={className}>
      {children}
    </section>
  );
}

export default BackgroundImage;
