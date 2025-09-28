// 邻接矩阵 
// 领接表

class Graph {
    public nodes = new Map<number, Node>();
    public edges = new Set<Edge>();
}

class Node {
    public value;
    public in = 0;
    public out = 0;
    public nexts = [];
    public edges = [];


    constructor(value) {
        this.value = value;
    }
}


class Edge {
    public weight;
    public from;
    public to;

    constructor(weight, from, to) {
        this.from = from
        this.to = to;
        this.weight = weight;
    }
}

class Graph {
    // 添加一条边（带权重）
    addEdge(from, to, weight) {}

    // 删除一条边
    removeEdge(from, to) {}

    // 判断两个节点是否相邻
    hasEdge(from, to) {}

    // 返回一条边的权重
    weight(from, to) {}

    // 返回某个节点的所有邻居节点和对应权重
    neighbors(v) {}

    // 返回节点总数
    size() {}
}