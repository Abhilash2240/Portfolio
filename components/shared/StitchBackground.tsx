export default function StitchBackground() {
  return (
    <div id="stitch-scene" aria-hidden="true">
      <div className="stitch-light-ray stitch-light-ray-a" />
      <div className="stitch-light-ray stitch-light-ray-b" />
      <div className="stitch-grid" />
      <div className="stitch-glow stitch-glow-orange" />
      <div className="stitch-glow stitch-glow-blue" />
      <div className="stitch-glow stitch-glow-purple" />
    </div>
  )
}
