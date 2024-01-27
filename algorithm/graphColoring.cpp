#include <bits/stdc++.h>
using namespace std;
const int maxN = 1e3 + 1;
int n, m;
vector<int> adj[maxN];
int color[maxN];

void inp() {
    cin >> n >> m;
    for (int i = 0; i < m; i++) {
        int u, v;
        cin >> u >> v;
        adj[u].push_back(v);
        adj[v].push_back(u);
    }
    memset(color, 0, sizeof(color));
}

bool check(int u, int c) {
    for (int v : adj[u]) {
        if (color[v] == c) return false;
    }
    return true;
}
int solve(int c) {
    int ans = 0;
    for (int i = 1; i <= n; i++) {
        if (!color[i] && check(i, c)) {
            color[i] = c;
            ++ans;
        }
    }
    return ans;
}
int main() {
    ios_base::sync_with_stdio(0);
    cin.tie(0);
    inp();
    int res = 0;
    int mau = 1;
    while (res < n) {
        res += solve(mau++);
    }
    for (int i = 1; i <= n; i++) cout << color[i] << " ";
    return 0;
}