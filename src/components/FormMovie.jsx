

const FormMovie = () => {
  return (
<form>
<div>
  <label htmlFor="name">Name</label>
  <input type="text" id="name" />
</div>

<div>
  <label htmlFor="genre">Genre</label>
  <input type="text" id="genre" />
</div>

<div>
  <label htmlFor="duration">Duration</label>
  <input type="text" id="duration" />
</div>

<div>
  <label htmlFor="release_date">Release date</label>
  <input type="text" id="release_date" />
</div>

<button>Create</button>
</form>
  )
}

export default FormMovie