<template>
  <div class="body-container">
    <Container />
    <Pack />
    <Material />
    <UserGroup />
  </div>
</template>

<script>
import Container from './components/Container';
import Pack from './components/Pack';
import Material from './components/Material';
import UserGroup from './components/UserGroup';

export default {
  name: 'Body',
  components: {
    Container,
    Pack,
    Material,
    UserGroup,
  },
};
</script>
