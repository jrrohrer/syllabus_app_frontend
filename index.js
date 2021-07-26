const endPoint = "http://localhost:3000/api/v1/syllabuses"

document.addEventListener('DOMContentLoaded', () => {
  getSyllabi();
})

function getSyllabi() {
  fetch(endPoint)
  .then(response => response.json())
  .then(syllabi => {
    syllabi.data.forEach(syllabus => {
      const syllabusMarkup = `
        <div data-id=${syllabus.id}>
          <img src="${syllabus.attributes.image_url}" height="200" width="250">
          <h3>${syllabus.attributes.title}</h3>
          <p>${syllabus.attributes.category.name}</p>
          <button data-id=${syllabus.id}>edit</button>
        </div>
        <br>`;

        document.querySelector('#syllabus-container').innerHTML += syllabusMarkup;
    })
  })
}