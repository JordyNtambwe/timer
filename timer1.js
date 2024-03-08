const args = process.argv.slice(2);

args.forEach(arg => {
  const seconds = Number(arg);
  if (!isNaN(seconds) && seconds > 0) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, seconds * 1000);
  }
});