export const randomHeight = () => {
  const height = [200, 320, 500];
  return height[Math.floor(Math.random() * height.length)];
};

export default {
  randomHeight
};
