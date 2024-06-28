export const randomHeight = () => {
  const height = [160, 320, 640];
  return height[Math.floor(Math.random() * height.length)];
};

export default {
  randomHeight
};
