<template>
<div>
  <!-- 
  Update this template list out all people

  HINT: you will need to add :key="person.id" to the <li>
  to get the linter to stop yelling
   -->
  <ul>
    <li>
      <h4>
        Knox Johnson
      </h4>
      <span>Chief robot whisperer at Obones</span>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  name: "List",
  data() {
    return {
      people: [
        {
          id: "0",
          name: "Knox Johnson",
          number: "(873) 422-3443",
          company: "Obones",
          title: "Chief robot whisperer"
        },
        {
          id: "2",
          name: "Sylvia Potter",
          number: "(845) 401-3558",
          company: "Unia",
          title: "Director of bean-counting"
        },
        {
          id: "3",
          name: "Perkins Tailor",
          number: "(999) 600-2134",
          company: "Comveyor",
          title: "Director of first impressions"
        },
        {
          id: "4",
          name: "Ford Baker",
          number: "(838) 471-2891",
          company: "Ronelon",
          title: "Digital overlord"
        }
      ]
    };
  },
  methods: {
    pushItem: function(item) {}
  }
};
</script>

<style scoped>
ul {
  list-style: none;
}
li {
  margin: 5px;
}
</style>
