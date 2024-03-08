const args = process.argv.slice(2);

args.forEach(arg => {
  const seconds = parseInt(arg);
  
  if (!isNaN(seconds) && seconds > 0) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, seconds * 1000);
  }
});