<template>
  <panel>
    <div slot="title">{{$t('m.Frequently_Asked_Questions')}}</div>
    <div class="content markdown-body">
      <ul>
        <li>입력과 출력이 어떻게 이루어지죠?
          <p>제출한 프로그램은 <code>stdin</code>('표준 입력')과 <code>stdout</code>('표준 출력')으로 처리됩니다.
            예를 들어, C언어의 <code>scanf</code> 나 C++의 <code>cin</code> 을 통해 채점서버의 입력을 받을 수 있고, <code>printf</code> 또는 <code>cout</code> 을 통해 채점서버에 출력값을 보낼 수 있습니다.
            또한 유저 프로그램은 파일을 읽고 쓸 수 없습니다. 그렇게 되면 <code>Runtime Error</code> 가 발생할 것입니다.
          </p>
        </li>
<<<<<<< HEAD
<<<<<<< HEAD
        <li>제출 응답시간이 무슨 뜻이죠??
        <p>코이업은 제출한 프로그램에 대해 여러번의 테스트케이스를 거쳐 채점합니다.
          각각의 테스트 케이스에 대해 제한시간 이내로 채점이 되면, 제출 응답시간은 각각의 테스트케이스에 대해 가장 많은 시간을 소모한 응답시간이 설정됩니다.
          채점시간이 초과되면 오답처리가 됩니다.
=======
=======
>>>>>>> parent of e27b9f7... Q&A와 자잘한 번역
        <li>What's the meaning of the submission execution time?
        <p>The onlinejudge might test your code multiple times with different input files.
          If your code gives the correct answer within the time limit for each input file, the execution time displayed is the max of the time spent for each test case.
          Otherwise, the execution time will have no sense.
<<<<<<< HEAD
>>>>>>> parent of e27b9f7... Q&A와 자잘한 번역
=======
>>>>>>> parent of e27b9f7... Q&A와 자잘한 번역
        </p>
        </li>
        <li>How can I use C++ Int64?
          <p>You should declare as <code>long long</code> and use with <code>cin/cout</code> or <code>%lld</code>, using<code> __int64</code> will result in <code>Compile Error</code>.</p>
        </li>
        <li>Java specifications?
          <p>All programs must begin in a static main method in a <code>Main</code> class. Do not use public classes: even <code>Main</code> must be non public to avoid compile error.Use buffered I/O to avoid time limit exceeded due to excesive flushing.</p>
        </li>
        <li>About presentation error?
          <p>There is no presentation error in this oj.The judger will trim the blacks and wraps in your ouput's <b>last</b> line.
            if it's still different with the correct output, the result will be <code>Wrong Answer</code>.</p>
        </li>
        <li>어떻게 만들었나요?
          <p>Qingdao Universisty에서 배포한 온라인저지 오픈소스를 사용했습니다. <a href="https://github.com/QingdaoU/OnlineJudge">(깃허브 링크)</a>.
            현재 아마존 AWS의 EC2 서비스를 활용해 운영 중에 있습니다.
          </p>
        </li>
      </ul>
    </div>
  </panel>
</template>

<script>
</script>

<style lang="less" scoped>
  .content {
    font-size: 16px;
    margin: 0 50px 40px 50px;
    > ul {
      list-style: disc;
      li {
        font-size: 16px;
        margin-top: 20px;
        &:first-child {
          margin-top: 0;
        }
        p {
          font-size: 14px;
          margin-top: 5px;
        }
      }
    }
  }
</style>
