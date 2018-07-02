Component({
  data: {

  },
  props: {
  },
  methods: {
    handleClick() {
      dd.navigateTo({
        url: this.props.pageUrl
      })
    }
  },
});
