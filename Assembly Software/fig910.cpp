#include <iostream>
using namespace std;

int f(int a)
{
  int y;
  if (a != 0) {
     y = (a + 1) + f(a - 1);  // bug if @temp used
     return y;
  }
  return 10;

}
int main()
{
   cout << f(2) << endl;
}
