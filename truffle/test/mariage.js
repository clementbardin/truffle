const mariage = artifacts.require("mariage");

contract('SimpleStorage', () => {
  it('should read newly written values', async() => {
    const simpleStorageInstance = await SimpleStorage.deployed();
    var value = (await simpleStorageInstance.read()).toNumber();

    assert.equal(value, 0, "0 wasn't the initial value");

    await simpleStorageInstance.write(1);
    value = (await simpleStorageInstance.read()).toNumber();
    assert.equal(value, 1, "1 was not written");

    await simpleStorageInstance.write(2);
    value = (await simpleStorageInstance.read()).toNumber();
    assert.equal(value, 2, "2 was not written");
  });

  it("should retrieve epoux and epuse address", async ()=>{
    const mariageInstance = await mariage.deployed(0xF0341A41959D281dB95aeE6B6b4B2b294bC2d71D, 0x99EB435543a0dB10777FDAE45F51e116Af8F95CC);

    var epouxAddress = await mariage.epoux();
    var epouse = await mariageInstance.expouse();

    assert.equal(epouxAddress, "0x99EB435543a0dB10777FDAE45F51e116Af8F95CC", "not equal");
    assert.equal(epouse, "0x99EB435543a0dB10777FDAE45F51e116Af8F95CC", "not equal")
  })

});
