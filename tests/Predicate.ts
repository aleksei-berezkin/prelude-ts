import { Predicate } from '../src/Predicate';
import * as assert from 'assert'

describe("predicate composition", () => {
    it("predicate and composition", () =>
       assert.ok(Predicate.of((x: number) =>x>2).and(x=>x<10)(5)));
    it("predicate and composition 2", () =>
       assert.ok(!Predicate.of((x: number) =>x>2).and(x=>x<10)(11)));
    it("predicate or composition", () =>
       assert.ok(!Predicate.of((x: number)=>x<2).or(x=>x>10)(5)));
    it("predicate or composition 2", () =>
       assert.ok(Predicate.of((x: number)=>x<2).or(x=>x>10)(11)));
    it("predicate negation", () =>
       assert.ok(Predicate.of((x: number)=>x<10).negate()(20)));
    it("predicate allOf", () =>
       assert.ok(Predicate.allOf<number>(x=>x>10,x=>x<20,x=>x%2===0)(14)));
    it("predicate allOf negative", () =>
       assert.ok(!Predicate.allOf<number>(x=>x>10,x=>x<20,x=>x%2===0)(15)));
    it("predicate anyOf", () =>
       assert.ok(Predicate.anyOf<number>(x=>x<10,x=>x>20)(4)));
    it("predicate anyOf negative", () =>
       assert.ok(!Predicate.anyOf<number>(x=>x<10,x=>x>20)(15)));
    it("predicate noneOf", () =>
       assert.ok(!Predicate.noneOf<number>(x=>x<10,x=>x>20)(4)));
    it("predicate noneOf negative", () =>
       assert.ok(Predicate.noneOf<number>(x=>x<10,x=>x>20)(15)));
});
