export abstract class Analyzer<T1, T2> {
  constructor(public data: T2){}

  abstract run(arg: T1): T1
}