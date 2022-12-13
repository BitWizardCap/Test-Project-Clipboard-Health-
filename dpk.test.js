const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", (event) => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });
  it("should 'candidate = event.partitionKey' if event.partitionKey exist if not change event as JSON and  candidate = crypto.createHash('sha3-512').update(data).digest('hex');", () => {
    const eventPartitionKey = event.partitionKey;
    expect(eventPartitionKey).toBeDefined(String);
  })
});
