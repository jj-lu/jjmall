<template>
  <div class="wrapper">
    <ul class="context">
      <button @click="btnClick">按钮</button>
      <li>分离列表1</li>
      <li>分离列表2</li>
      <li>分离列表3</li>
      <li>分离列表4</li>
      <li>分离列表5</li>
      <li>分离列表6</li>
      <li>分离列表7</li>
      <li>分离列表8</li>
      <li>分离列表9</li>
      <li>分离列表10</li>
      <li>分离列表11</li>
      <li>分离列表12</li>
      <li>分离列表13</li>
      <li>分离列表14</li>
      <li>分离列表15</li>
      <li>分离列表16</li>
      <li>分离列表17</li>
      <li>分离列表18</li>
      <li>分离列表19</li>
      <li>分离列表20</li>
      <li>分离列表21</li>
      <li>分离列表22</li>
      <li>分离列表23</li>
      <li>分离列表24</li>
      <li>分离列表25</li>
      <li>分离列表26</li>
      <li>分离列表27</li>
      <li>分离列表28</li>
      <li>分离列表29</li>
      <li>分离列表30</li>
      <li>分离列表31</li>
      <li>分离列表32</li>
      <li>分离列表33</li>
      <li>分离列表34</li>
      <li>分离列表35</li>
      <li>分离列表36</li>
      <li>分离列表37</li>
      <li>分离列表38</li>
      <li>分离列表39</li>
      <li>分离列表40</li>
      <li>分离列表41</li>
      <li>分离列表42</li>
      <li>分离列表43</li>
      <li>分离列表44</li>
      <li>分离列表45</li>
      <li>分离列表46</li>
      <li>分离列表47</li>
      <li>分离列表48</li>
      <li>分离列表49</li>
      <li>分离列表50</li>
      <li>分离列表51</li>
      <li>分离列表52</li>
      <li>分离列表53</li>
      <li>分离列表54</li>
      <li>分离列表55</li>
      <li>分离列表56</li>
      <li>分离列表57</li>
      <li>分离列表58</li>
      <li>分离列表59</li>
      <li>分离列表60</li>
      <li>分离列表61</li>
      <li>分离列表62</li>
      <li>分离列表63</li>
      <li>分离列表64</li>
      <li>分离列表65</li>
      <li>分离列表66</li>
      <li>分离列表67</li>
      <li>分离列表68</li>
      <li>分离列表69</li>
      <li>分离列表70</li>
      <li>分离列表71</li>
      <li>分离列表72</li>
      <li>分离列表73</li>
      <li>分离列表74</li>
      <li>分离列表75</li>
      <li>分离列表76</li>
      <li>分离列表77</li>
      <li>分离列表78</li>
      <li>分离列表79</li>
      <li>分离列表80</li>
      <li>分离列表81</li>
      <li>分离列表82</li>
      <li>分离列表83</li>
      <li>分离列表84</li>
      <li>分离列表85</li>
      <li>分离列表86</li>
      <li>分离列表87</li>
      <li>分离列表88</li>
      <li>分离列表89</li>
      <li>分离列表90</li>
      <li>分离列表91</li>
      <li>分离列表92</li>
      <li>分离列表93</li>
      <li>分离列表94</li>
      <li>分离列表95</li>
      <li>分离列表96</li>
      <li>分离列表97</li>
      <li>分离列表98</li>
      <li>分离列表99</li>
      <li>分离列表100</li>
    </ul>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: "Category",
  data(){
    return {
      scroll: null
    }
  },
  methods: {
    btnClick(){
      console.log('click');
    }
  },
  mounted() {
    this.scroll = new BScroll('.wrapper',{
      probeType: 3,
      pullUpLoad: true
    })

    this.scroll.on('pullingUp',() => {
      console.log('上拉加载');
    })
  }
}
</script>

<style scoped>
.wrapper{
  height: 200px;
  background: #bbffaa;
  overflow: hidden;
}
</style>
