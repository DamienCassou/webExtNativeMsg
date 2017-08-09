"use strict";
{
  /* api */
  const {Setup} = require("../modules/setup");
  const {assert} = require("chai");
  const {describe, it} = require("mocha");

  /* constant */
  const {DIR_HOME} = require("../modules/constant");

  /* Setup */
  describe("Setup", () => {
    const setup = new Setup({
      hostDescription: "My host description",
      hostName: "myhost",
    });

    it("should create an instance", () => {
      assert.instanceOf(setup, Setup);
    });

    /* getters */
    it("should get hostDescription value in string", () => {
      assert.strictEqual(setup.hostDescription, "My host description");
    });

    it("should get hostName value in string", () => {
      assert.strictEqual(setup.hostName, "myhost");
    });

    it("should get mainScriptFile value in string", () => {
      assert.strictEqual(setup.mainScriptFile, "index.js");
    });

    it("should get null if chromeExtensionIds arg is not given", () => {
      assert.isNull(setup.chromeExtensionIds);
    });

    it("should get null if webExtensionIds arg is not given", () => {
      assert.isNull(setup.webExtensionIds);
    });

    it("should get null if callback arg is not given", () => {
      assert.isNull(setup.callback);
    });

    /* setters */
    it("should set hostDescription in given string", () => {
      setup.hostDescription = "My new host description";
      assert.strictEqual(setup.hostDescription, "My new host description");
    });

    it("should set hostName in given string", () => {
      setup.hostName = "mynewhost";
      assert.strictEqual(setup.hostName, "mynewhost");
    });

    it("should set mainScriptFile in given string", () => {
      setup.mainScriptFile = "main.js";
      assert.strictEqual(setup.mainScriptFile, "main.js");
    });

    it("should set chromeExtensionIds in given array", () => {
      setup.chromeExtensionIds = ["chrome://abc"];
      assert.deepEqual(setup.chromeExtensionIds, ["chrome://abc"]);
    });

    it("should set webExtensionIds in given array", () => {
      setup.webExtensionIds = ["myapp@webextension"];
      assert.deepEqual(setup.webExtensionIds, ["myapp@webextension"]);
    });

    it("should set callback in given function", () => {
      const myCallback = a => a;
      setup.callback = myCallback;
      assert.strictEqual(setup.callback.name, "myCallback");
    });

    /* methods */
    describe("setConfigDir", () => {
      it("should throw if dir is not given", () => {
        assert.throws(() => setup.setConfigDir(),
                      "Failed to normalize undefined");
      });

      it("should throw if dir is not subdirectory of user's home dir", () => {
        assert.throws(() => setup.setConfigDir("/foo/bar/"),
                      `Config path is not sub directory of ${DIR_HOME}.`);
      });
    });

    // FIXME: add test for setup.run()
    /*
    it("run", () => {
    });
    */
  });
}