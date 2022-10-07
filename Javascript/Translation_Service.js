export class TranslationService {

    constructor(api) {
      this.api = api;
    }
   
    free(text) {
      return this.api.fetch(text).then(result => result.translation);
    }
   
    batch(texts) {
      if(texts.length === 0){
        return Promise.reject(new BatchIsEmpty());
      }
      return Promise.all(texts.map((text) => this.free(text)));
    }

    request(text) {
      const promise = () => new Promise((resolve, reject) => {
        this.api.request(text, error => {
          error ? reject(error) : resolve(undefined);
        })
      })
      return promise().catch(promise).catch(promise);
    }

    premium(text, minimumQuality) {
      return this.api
      .fetch(text)
      .catch(() => {
        return this.request(text).then(() => this.api.fetch(text));
      })
      .then((res) => {
        if(res.quality < minimumQuality) throw new QualityThresholdNotMet(text);
        return res.translation;
      })
    }
  }

  export class QualityThresholdNotMet extends Error {

    constructor(text) {
      super(
        `
  The translation of ${text} does not meet the requested quality threshold.
      `.trim()
      );
      this.text = text;
    }
  }

  export class BatchIsEmpty extends Error {
    constructor() {
      super(
        `
  Requested a batch translation, but there are no texts in the batch.
      `.trim()
      );
    }
  }
  