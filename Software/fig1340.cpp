#include <iostream>
using namespace std;

int sum;
int ret_sum(int x, int y)
{
   int z;
   z = x + y;
   return z;
}
int main() {
   sum = ret_sum(5, 7);
   cout << sum << endl;
   return 0;
}
