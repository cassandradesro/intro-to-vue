<template>
<div>
  <!-- 
  Update this template to bind title to the input 
  and the submit button to alertResult
   -->
  <ul>
    <li :key="person.id" v-for="person in people">
      <div>
        {{person.name}}
      </div>
      <div>
        <span>{{person.title}} at {{person.company}}</span>
      </div>
    </li>
  </ul>
</div>
</template>

<script>
// Clicking submit should alert the value of the input field

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
