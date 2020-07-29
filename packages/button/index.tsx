import { defineComponent, ref } from 'vue'

export default defineComponent((props)=>{
  const count = ref(0);

  const inc = () => {
    count.value++;
  };

  return () => (
    <button onClick={inc}>
      {count.value} increase
    </button>
  );
})