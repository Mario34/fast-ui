import { defineComponent, ref } from 'vue'
import Button from '@/packages/button'

export default defineComponent(() => {
  const count = ref(0);

  const inc = () => {
    count.value++;
  };

  return () => (
    <div>
      This is first Component. Let's go!
      <br></br>
      <Button />
    </div>
  );
})