const app = new Vue({
  el: '#app',
  data: {
    firstName: 'Donald',
    middleName: 'John',
    lastName: 'Trump',
  },
  computed: {
    fullName: {
      get() {
        return [this.firstName, this.middleName, this.lastName]
          .filter(x => x.length > 0)
          .join(' ');
      },
      set(value) {
        const names = value.split(' ');
        this.firstName = names[0];
        this.middleName = names[1] || '';
        this.lastName = names[2] || '';
      }
    }
  }
});
