export default function MemberButton({label}) {
  if (!label) {
    label = 'Вступить'
  }
  return <div className="d-flex justify-content-center align-items-center rounded-pill px-4 py-3 pt-2 h4 mb-0 member-button transition">
    <div data-bs-toggle="modal" data-bs-target="#memberModal">
      <span>{label}</span>
    </div>
  </div>
}