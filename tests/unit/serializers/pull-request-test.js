import { setupTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Unit | Serializer | pull-request', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    const store = this.owner.lookup('service:store');
    const serializer = store.serializerFor('pull-request');

    assert.ok(serializer);
  });
});
