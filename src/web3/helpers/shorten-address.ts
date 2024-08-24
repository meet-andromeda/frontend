function shortenAddress(address: string): string {
  console.log(address);
  return `${address.substring(0, 6)}...${address.substring(
    address.length - 4,
  )}`;
}

export default shortenAddress;
