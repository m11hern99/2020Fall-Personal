#include <iostream>
using namespace std;

int x = 3;
void bug(const int &m)
{
  if (m != 0)
      bug(m - 1);
  cout << m << endl;
}
int main()
{
   bug(x);
}
